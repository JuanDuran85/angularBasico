export interface AlbumsArtist {
    tracks: Track[];
}

export interface Track {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   string;
    track_number:  number;
    type:          TrackType;
    uri:           string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          ArtistType;
    uri:           URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The14PVkFUHDL207LzLHTSA18 = "14pVkFUHDL207LzLHtSA18",
}

export enum Name {
    Pantera = "Pantera",
}

export enum ArtistType {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist14PVkFUHDL207LzLHTSA18 = "spotify:artist:14pVkFUHDL207LzLHtSA18",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}