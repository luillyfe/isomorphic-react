import { Photos, mapToPhotos } from "@/utils";
import Image from "next/image";

export default async function Page() {
  const photos = await getRandomPhotos();
  return (
    <>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.rawURL}
          alt={photo.alt}
          width={photo.width}
          height={0}
          className="h-auto inline-block"
        />
      ))}
    </>
  );
}

export async function getRandomPhotos(): Promise<Photos[]> {
  let pageNumber = 1;

  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  const unsplashURL = "https://api.unsplash.com/";
  const randomPhotos = `${unsplashURL}photos/?page=${pageNumber}`;

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
