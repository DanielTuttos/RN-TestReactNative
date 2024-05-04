import {create} from 'zustand';
// import {
//   authCheckStatus,
//   authLogin,
//   registerUser,
// } from '../../../actions/auth/auth';
// import {StorageAdapter} from '../../../config/adapter/storage-adapter';
import {Track} from '../../domain/entities/tracks';
import {getTracksFromCountry} from '../../actions/get-track';

export interface TracksState {
  tracksCountry: Country;
  getTracksCountry: () => Promise<void>;
}

export interface Country {
  ecuador: Track[];
  peru: Track[];
  mexico: Track[];
  spain: Track[];
}

export const useTracksStore = create<TracksState>()((set, get) => ({
  tracksCountry: {ecuador: [], peru: [], mexico: [], spain: []},
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
}));
