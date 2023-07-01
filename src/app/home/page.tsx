import Image from "next/image";

import { Photos, mapToPhotos } from "@/utils";
import Footer from "./components/Footer";

export default async function Page() {
  const photos = await getRandomPhotos();

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

export async function getRandomPhotos(): Promise<Photos[]> {
  let pageNumber = 1;
  let itemsPerPage = 20;

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
