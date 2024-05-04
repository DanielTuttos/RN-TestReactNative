import {Track, TrackInfo} from '../../domain/entities/tracks';
import {
  TrackElement,
  TrackElementInfo,
  TrackResponseInfo,
} from '../interfaces/tracks-lastfm-api';

export class TrackMapper {
  static trackMapperToEntity(track: TrackElement): Track {
    return {
      id: track.mbid,
      name: track.name,
      artistName: track.artist.name,
      image: track.image[track.image.length - 1]['#text'],
    };
  }
  static trackInfoMapperToEntity(track: TrackElementInfo): TrackInfo {
    return {
      id: track.mbid,
      name: track.name,
      artistName: track.artist.name,
      image: track.album.image[track.album.image.length - 1]['#text'],
      album: track.album.title,
      published: track.wiki.published,
      description: track.wiki.content,
    };
  }
}
