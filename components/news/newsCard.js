import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ title, link, pubDate, contentSnippet, source, logo }) => {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - pubDate;
  const minsAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minsAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  let timeAgoText = "";
  if (daysAgo > 0) {
    timeAgoText = `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else if (hoursAgo > 0) {
    timeAgoText = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (minsAgo > 0) {
    timeAgoText = `${minsAgo} ${minsAgo === 1 ? "minute" : "minutes"} ago`;
  } else {
    timeAgoText = "Just now";
  }

  return (
    <Link href={link} target="_blank">
      <div className=" rounded-md  w-full h-[270px] bg-gradient-to-br from-[#2b5876] to-[#4e4376]  transition ease-in-out delay-50  hover:-translate-y-2">
        <div className="flex flex-col gap-3 justify-end h-full p-4 ">
          <div className="flex items-center gap-2">
            {logo && (
              <div>
                <Image src={logo} width={120} height={120} alt={source} />
              </div>
            )}
            <div className="w-1  h-1 rounded-full bg-neutral-100" />
            <p className="text-xs font-thin italic">{timeAgoText}</p>
          </div>

          <h3 className="font-bold">{title}</h3>
          <p className="line-clamp-3 text-ellipsis text-sm font-light">
            {contentSnippet}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
