export type Photos = {
  id: string;
  rawURL: string;
  alt: string;
  width: number;
  height: number;
};

type RawPhotos = {
  id: string;
  alt_description: string;
  width: string;
  height: string;
  urls: URLS;
};

type URLS = {
  raw: string;
};

export function mapToPhotos(rawPhotos: RawPhotos[]): Photos[] {
  return rawPhotos.map((data) => ({
    id: data.id,
    rawURL: data.urls?.raw,
    alt: data.alt_description,
    width: reduceSize(data.width),
    height: reduceSize(data.height),
  }));
}

function reduceSize(size: string): number {
  return Number(size) / 20;
}
