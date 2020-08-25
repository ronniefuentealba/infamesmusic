const CrewCard = props => (
  <div className={'artistPage'}>
    <h2 style={title}>{props.slug}</h2>
    <div className={'artistPage__gridWrapper'}>
      <div>
        <img width="100%" src={!props.infame.photo ? '/random/4tokaramazov.jpg' :props.infame.photo} />
      </div>
      <div>
        <div className={'socialNetworkLinks'}>
          <ul aria-label={'Redes Sociales'}>
            <li><a href={'infame[0].socialLinks.spotify'} target="_blank"><PlayCircleOutlineOutlined /></a></li>
            <li><a href={'infame[0].socialLinks.youtube'} target="_blank"><YouTube /></a></li>
            <li><a href={'infame[0].socialLinks.facebook'} target="_blank"><Facebook/></a></li>
          </ul>
        </div>
        <p>{!infame[0].description ? 'Laboris officia ex voluptate proident ut. Ipsum esse excepteur incididunt elit voluptate quis anim sit cillum occaecat est occaecat adipisicing mollit. Occaecat cillum sunt nisi irure ullamco ex do ex anim. Ea eu culpa ea anim sit ut non sunt cillum eu cupidatat pariatur sint ullamco. Laboris incididunt quis do laboris proident anim sit eu ea sit aute sunt.' : infame[0].description}</p>
        <div>
          <h4 id="downloadsTitle">Descargas</h4>
          <ul aria-labelledby={'downloadsTitle'}>
            <li>Laboratoria underground 2003</li>
            <li>Presskit</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default CrewCard;