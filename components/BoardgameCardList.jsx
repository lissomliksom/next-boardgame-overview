export default function BoardgameCardList({ title, icon, data }) {
  return(
    <div className="px-5 py-2 flex space-x-5 flex-col md:flex-row">
      <div className="w-full md:w-24 flex flex-col items-start md:items-center space-y-1 text-sm uppercase">
        <h3>{ title }</h3>
        { icon }
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}