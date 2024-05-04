import {lastFmApi} from '../config/api/lastFmAPI';
import {Track, TrackInfo} from '../domain/entities/tracks';
import {
  TrackResponse,
  TrackResponseInfo,
} from '../infrastructure/interfaces/tracks-lastfm-api';
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

    return track;
  } catch (error) {
    console.log('error: ', {error});
    throw new Error(`Error when obtaining music by country ${country}`);
  }
};

export const getTrackById = async (id: string): Promise<TrackInfo> => {
  try {
    const {data} = await lastFmApi.get<TrackResponseInfo>('2.0/', {
      params: {
        method: 'track.getInfo',
        mbid: id,
      },
    });
    const track = TrackMapper.trackInfoMapperToEntity(data.track);
    return track;
  } catch (error) {
    console.log('error getTrack: ', {error});
    throw new Error(`Error getting music by id ${id}`);
  }
};
