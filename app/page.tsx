"use client";

import Nav from "./components/Nav";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div
        className="relative h-[75vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/sandwitch.jpg")' }}
      >
        <Nav/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 p-6 rounded-md shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-white bg-red-950 px-6 py-4 rounded tracking-wide leading-relaxed">
              Open Monday - Saturday
            </p>
            <p className="text-xl md:text-2xl mt-2 tracking-wide leading-relaxed">
              10AM - 6PM
            </p>
            <p className="text-lg md:text-xl mt-1 tracking-wide leading-relaxed">
              Temporarily Closed Sundays
            </p>
          </div>
        </div>
      </div>
      <div className="inset-0 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        Where can I get some? There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on
        the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum
        which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.
        5 paragraphs words bytes lists Start with 'Lorem ipsum dolor sit
        amet...' Donate: If you use this site regularly and would like to help
        keep the site on the Internet, please consider donating a small sum to
        help pay for the hosting and bandwidth bill. There is no minimum
        donation, any sum is appreciated - click here to donate using PayPal.
        Thank you for your support. Donate bitcoin:
        16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF Translations: Can you help translate
        this site into a foreign language ? Please email us with details if you
        can help. with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic
        words etc. 5 paragraphs words bytes lists Start with 'Lorem ipsum dolor
        sit amet...' Donate: If you use this site regularly and would like to
        help keep the site on the Internet, please consider donating a small sum
        to help pay for the hosting and bandwidth bill. There is no minimum
        donation, any sum is appreciated - click here to donate using PayPal.
        Thank you for your support. Donate bitcoin:
        16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF Translations: Can you help translate
        this site into a foreign language ? Please email us with details if you
        can help.
      </div>
    </>
  );
}
