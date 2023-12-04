import '@/style/experience.scss'
import servicesscroll from '../components/servicesInfiniteScroll'
import experienceCard from '../components/experienceCard'

export default function experiencePage(){
    return(
        <section className="experienceUsSection">
            <h1 className="experienceUsTile">
            <div className='redline'></div>
            The Guest Experience you deserve
            <div className='redline'></div>
            </h1>
            <p className="experiencedesc">
            Our aim is to make your trip memorable. To ensure you spend your time right, we have a lot of services to avoid any hassle for you.
            </p>


            <div className="experienceCardConatiners">
                {experienceCard('/assistance.jpg', 'ground assistance & digital concierge')}
                {experienceCard('/villa-pool.jpg', '5 star amenities rich property')}
                {experienceCard('/safety.jpg', 'Safety and security')}
                {experienceCard('/destination.jpg', 'Amazing Locations')}
                {experienceCard('/snacks.jpg', 'Welcome snacks and drinks')}
                {experienceCard('/chef.jpg', 'On-call chef')}
            
                
            </div>

            {servicesscroll()}
        </section>
    )
}