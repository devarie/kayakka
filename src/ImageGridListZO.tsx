import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ImageList, ImageListItem } from '@material-ui/core'
import tileDataZO from './TileDataZO'

const useStyles = makeStyles((theme: { palette: { background: { paper: any } } }) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'sm',
    height: 'sm',
  },
}))

export default function ImageGridListZO() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageList cellHeight={240} className={classes.gridList} cols={3}>
        {tileDataZO.map(tile => (
          <ImageListItem key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
