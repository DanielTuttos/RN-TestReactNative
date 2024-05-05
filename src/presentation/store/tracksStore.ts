import {create} from 'zustand';
import {Track, TrackInfo} from '../../domain/entities/tracks';
import {getTracksFromCountry, getTrackById} from '../../actions/get-track';
import {StorageAdapter} from '../../config/adapter/storage-adapter';

export interface TracksState {
  tracksCountry: Country;
  trackInfo?: TrackInfo;
  playedSongs: TrackInfo[];
  favorites: TrackInfo[];
  getTracksCountry: () => Promise<void>;
  getTrackById: (id: string) => Promise<void>;
  getPlayedSongs: () => Promise<void>;
  getFavorites: () => Promise<void>;
  addFavorites: (track: TrackInfo) => Promise<void>;
  clearTrack: () => void;
}

export interface Country {
  ecuador: Track[];
  peru: Track[];
  mexico: Track[];
  spain: Track[];
}

export const useTracksStore = create<TracksState>()((set, get) => ({
  tracksCountry: {ecuador: [], peru: [], mexico: [], spain: []},
  trackInfo: undefined,
  playedSongs: [],
  favorites: [],
  getTracksCountry: async () => {
    const {tracksCountry} = get();
    const allPromiseGet = Object.keys(tracksCountry).map(key =>
      getTracksFromCountry(key),
    );
    const resp = await Promise.all(allPromiseGet);
    if (!resp) {
      return;
    }
    const [ecuador, peru, mexico, spain] = resp;
    set({tracksCountry: {ecuador, peru, mexico, spain}});
  },
  getTrackById: async (id: string) => {
    const track = await getTrackById(id);
    if (!track) return;
    const newPlayedSongs = get().playedSongs.slice();
    const index = newPlayedSongs.findIndex(obj => obj.id === track.id);
    if (index !== -1) {
      newPlayedSongs.splice(index, 1);
    }
    newPlayedSongs.unshift(track);
    if (newPlayedSongs.length > 10) {
      newPlayedSongs.pop();
    }
    set({
      trackInfo: track,
      playedSongs: [...newPlayedSongs],
    });
    await StorageAdapter.setItem('playedSongs', JSON.stringify(newPlayedSongs));
  },
  getPlayedSongs: async () => {
    const playedSongs = await StorageAdapter.getItem('playedSongs');
    if (playedSongs) set({playedSongs: JSON.parse(playedSongs)});
  },
  getFavorites: async () => {
    const favorites = await StorageAdapter.getItem('favorites');
    if (favorites) set({favorites: JSON.parse(favorites)});
  },
  addFavorites: async (track: TrackInfo) => {
    if (track) {
      const newFavorites = get().favorites.slice();
      const index = newFavorites.findIndex(obj => obj.id === track.id);
      if (index === -1) {
        newFavorites.push(track);
      }else{
        newFavorites.splice(index, 1)
      }
      await StorageAdapter.setItem('favorites', JSON.stringify(newFavorites));
      set({favorites: [...newFavorites]});
    }
  },
  clearTrack: () => {
    set({trackInfo: undefined});
  },
}));
