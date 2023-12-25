import React, { useMemo } from 'react'
import { socialData } from './data'
import styles from './styles.module.scss'
import { tooltip } from '@/utils/tooltip'

function SocialIcons(props) {

    const { iconFor } = props

	const data = useMemo(() => {
		if(socialData[iconFor]){
			return socialData[iconFor]
		}
	}, [iconFor])

  return iconFor && socialData[iconFor] && <>
    <span
		className={`${styles.socialIcon} ${styles[iconFor]}`}
		{...(data.tooltip ? tooltip(data.tooltip, 'light') : {})}
	>
		{data.icon}
    </span>
  </>
}

export default SocialIcons