import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const TerrainIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path
          d="M720-480v-168l-64 64-56-56 160-160 160 160-56 57-64-64v167h-80ZM40-80l240-320 180 240h300L560-426 460-294l-50-66 150-200L920-80H40Zm420-80Z" />
      </svg>
    </SvgIcon>
  )
}

export default TerrainIcon