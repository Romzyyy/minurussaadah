import BannerComponent from '@/components/Banner'
import FacilitieComponent from '@/components/Fasilitas'
import HistoryComponent from '@/components/History'

export default function Home() {
    return (
        <main>
            <BannerComponent />
            <HistoryComponent />
            <FacilitieComponent />
        </main>
    )
}
