import {Track} from '../../domain/entities/tracks';
import {TrackElement} from '../interfaces/tracks-lastfm-api';

export class TrackMapper {
  static trackMapperToEntity(track: TrackElement): Track {
    return {
      id: track.mbid,
      name: track.name,
      artistName: track.artist.name,
      image: track.image[track.image.length - 1]['#text'],
    };
  }
}
