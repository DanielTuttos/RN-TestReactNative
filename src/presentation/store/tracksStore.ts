import {create} from 'zustand';
import {Track, TrackInfo} from '../../domain/entities/tracks';
import {getTracksFromCountry, getTrackById} from '../../actions/get-track';

export interface TracksState {
  tracksCountry: Country;
  trackInfo?: TrackInfo;
  getTracksCountry: () => Promise<void>;
  getTrackById: (id: string) => Promise<void>;
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
    // await StorageAdapter.setItem('token', resp.token);
    set({tracksCountry: {ecuador, peru, mexico, spain}});
  },
  getTrackById: async (id: string) => {
    const track = await getTrackById(id);
    if (!track) return;
    set({trackInfo: track});
  },
  clearTrack: () => {
    set({trackInfo: undefined});
  },
}));
