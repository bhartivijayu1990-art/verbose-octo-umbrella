type Props = {
    title: string;
    desc: string;
    price: string;
  };
  
  export default function ServiceCard({ title, desc, price }: Props) {
    return (
      <div className="p-8 rounded-3xl bg-white shadow-md">
        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>
  
        <p className="text-gray-600 mb-4">
          {desc}
        </p>
  
        <p className="font-semibold text-lg">
          {price}
        </p>
      </div>
    );
  }
  