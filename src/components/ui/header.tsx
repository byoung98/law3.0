import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-500 mx-auto px-4 py-2">
        <Image
          src="/TXN_BIG.png"
          alt="Texas Instruments Logo"
          width={200}
          height={150}      
        />
    </header>
  );
};

export default Header;