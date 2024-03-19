import { Container } from '@/components/shared/container'
import { FadeIn } from '@/components/shared/fade-in'

export default function Usps() {
  return (
    <Container className='relative z-10 max-w-[87.5%] space-y-12 px-0 py-36 text-3xl font-bold text-white/95 md:max-w-[692px] md:text-4xl xl:max-w-[980px] xl:text-5xl 2xl:max-w-[1208px] 2xl:text-6xl'>
      <FadeIn>
        <p>Nội dung Apple&nbsp;Originals mới mỗi tháng, hoàn&nbsp;toàn không quảng&nbsp;cáo.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Xem trực tuyến trên ứng dụng Apple&nbsp;TV <br className='max-md:hidden' />
          trên các thiết bị Apple, TV thông minh, <br className='max-md:hidden' />
          máy chơi trò chơi hoặc thiết bị đầu&nbsp;thu.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Xem ở độ phân giải video 4K&nbsp;HDR với Âm&nbsp;Thanh Không Gian sống&nbsp;động.</p>
      </FadeIn>
      <FadeIn>
        <p>Chia sẻ một gói đăng ký với tối đa năm&nbsp;người.</p>
      </FadeIn>
    </Container>
  )
}
