// src/components/atoms/TextSub.tsx
type TextSubProps = {
    children: React.ReactNode;
  };
  
  export default function TextSub({ children }: TextSubProps) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {children}
      </p>
    );
  }
  