import {DownloadsDB} from './../../config'
import './downloads.scss'

const Downloads = () => (
  <div className={'downloadSection'}>
    <h2><span>Descargas</span> Disponibles</h2>
    <div className={'dowloadWrapper'}>
      {DownloadsDB.map( itemToDownload => <p key={itemToDownload.id}>{itemToDownload.filename}</p>)}
    </div>
  </div>
)

export default Downloads