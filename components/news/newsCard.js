import Image from "next/image";

const NewsCard = ({ title, link, pubDate, contentSnippet, source, logo }) => {
  return (
    <div className=" rounded-md  w-full h-[270px] bg-gradient-to-br from-[#4B79A1] to-[#283E51] transition ease-in-out delay-50  hover:-translate-y-2">
      <div className="flex flex-col gap-3 justify-end h-full p-4 ">
        {logo && (
          <div>
            <Image src={logo} width={120} height={120} alt={source} />
          </div>
        )}
        <h3 className="font-bold">{title}</h3>
        <p className="line-clamp-3 text-ellipsis text-sm font-light">
          {contentSnippet}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
