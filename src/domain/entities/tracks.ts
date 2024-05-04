export interface Track {
  id: string;
  name: string;
  artistName: string;
  image: string;
}

export interface TrackInfo extends Track {
  album: string;
  published: string;
  description: string;
}
