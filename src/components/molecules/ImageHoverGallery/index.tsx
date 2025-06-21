import ImageHoverItem from "@/components/atoms/ImageHoverItem/index";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const images = [
  `${basePath}/assets/images/feri-bola.jpg`,
  `${basePath}/assets/images/feri-mentor.jpeg`,
  `${basePath}/assets/images/feri-bola.jpg`,
//   `${basePath}/assets/images/feri-mentor.jpeg`, // Baris ini sudah dikomentari, saya biarkan
];

export default function ImageHoverGallery() {
  return (
    <div className="pt-8 relative z-0 px-4 sm:px-6 md:px-12">
      <h3 className="text-xl font-semibold text-sky-600 mb-6 text-center">Photo Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {images.map((img, idx) => (
          <ImageHoverItem key={idx} src={img} alt={`Photo ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}