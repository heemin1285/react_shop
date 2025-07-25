function Card({data}) {
  const navigate = useNavigate();

  
  
  return (
    <div className="col-md-4" onClick={() => {

      navigate('/detail/' + data.id)

    }}>
      <img src={`${import.meta.env.BASE_URL}img/${data.title}.jpg`} alt="" width='80%' />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
    </div>
  )
}

export default Card