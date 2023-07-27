interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Card {id}</h3>
      </div>
      <div className="card-body">
      <p>{paragraph}</p>
      </div>
      <div className="card-footer">
      <p>{details}</p>
      </div>
    </div>
  )
}