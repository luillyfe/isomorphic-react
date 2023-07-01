import Image from "next/image";

import { Photos, mapToPhotos } from "@/utils";
import { getFromDatasource } from "@/store";
import Footer from "./components/Footer";

let photos: Photos[] = [];
export default async function Page() {
  let { pageNumber } = getFromDatasource();
  let itemsPerPage = 20;

  const newPhotos = await getRandomPhotos(pageNumber, itemsPerPage);
  photos = [...photos, ...newPhotos];

  return (
    <div className="text-center">
      {photos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.rawURL}
          alt={photo.alt || "ramdon"}
          width={photo.width}
          height={0}
          className="inline-block h-auto"
          priority
        />
      ))}
      <Footer />
    </div>
  );
}

export async function getRandomPhotos(
  pageNumber: number,
  itemsPerPage: number
): Promise<Photos[]> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  const unsplashURL = "https://api.unsplash.com/";
  const randomPhotos = `${unsplashURL}photos/?page=${pageNumber}&per_page=${itemsPerPage}`;

  const response = await fetch(randomPhotos, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return mapToPhotos(data);
  }

  console.error(response.status);
  return [];
}
