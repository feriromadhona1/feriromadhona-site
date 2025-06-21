// src/components/atoms/TextHeading.tsx
type TextHeadingProps = {
    children: React.ReactNode;
  };
  
  export default function TextHeading({ children }: TextHeadingProps) {
    return (
      <h3 className="text-lg font-semibold text-sky-600">
        {children}
      </h3>
    );
  }
  