const NewsCard = () => {
  return (
    <div className="border border-white w-[330px] h-[270px]">
      <div className="flex flex-col gap-3 justify-end h-full p-4">
        <div>SourceImage</div>
        <h3>Title</h3>
        <p className="line-clamp-3 text-ellipsis">
          The big brown fix is playing tetris but he dont want to
          crysadnessssssdsddfsdfasdfsadfasdfsadfasdfasdfasdf asdfasdfasdfsda
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
