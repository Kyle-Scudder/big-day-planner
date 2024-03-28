import { Icon24Hours } from "@tabler/icons-react"

const SiteTitle = () => {
  return (
    <div className='flex align-middle'>
      <Icon24Hours />
      <p className="max-lg:hidden font-black pl-3">
        Big Day Planner
      </p>
    </div>
  )
}

export default SiteTitle
