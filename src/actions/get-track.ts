import {lastFmApi} from '../config/api/lastFmAPI';
import {Track} from '../domain/entities/tracks';
import {TrackResponse} from '../infrastructure/interfaces/tracks-lastfm-api';
import {TrackMapper} from '../infrastructure/mappers/track.mapper';

export const getTracksFromCountry = async (
  country: string = 'ecuador',
): Promise<Track[]> => {
  try {
    const {data} = await lastFmApi.get<TrackResponse>('2.0/', {
      params: {
        method: 'geo.gettoptracks',
        country,
        limit: 10,
      },
    });
    const track = data.tracks.track.map(track =>
      TrackMapper.trackMapperToEntity(track),
    );
    // console.log('track: ', track[0]);
    return track || [];
  } catch (error) {
    console.log('error: ', {error});
    throw new Error(`Error when obtaining music by country ${country}`)
  }
};
