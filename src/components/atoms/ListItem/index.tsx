// src/components/atoms/ListItem.tsx
type ListItemProps = {
    children: React.ReactNode;
  };
  
  export default function ListItem({ children }: ListItemProps) {
    return <li className="text-gray-700 dark:text-gray-300">{children}</li>;
  }
  