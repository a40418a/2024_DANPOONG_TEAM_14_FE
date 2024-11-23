export const MarketInfo = ({ placeUrl }: { placeUrl: string }) => {
  if (!placeUrl) return <p>loading...</p>;

  return (
    <iframe
      src={placeUrl}
      title="Kakao Place"
      className="w-full h-[56vh]"
      allowFullScreen
    ></iframe>
  );
};
