export interface TrackResponse {
  tracks: Tracks;
}

export interface Tracks {
  track: TrackElement[];
  '@attr': TracksAttr;
}

export interface TracksAttr {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}

export interface TrackElement {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
  '@attr': TrackAttr;
}

export interface TrackAttr {
  rank: string;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Image {
  '#text': string;
  size: string;
}

export interface Streamable {
  '#text': string;
  fulltrack: string;
}
