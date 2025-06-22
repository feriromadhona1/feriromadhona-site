import ImageHoverItem from "@/components/atoms/ImageHoverItem/index"

const images = [
  `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/feri-bola.jpg`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/feri-mentor.jpeg`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/feri-bola.jpg`,
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
  )
}
