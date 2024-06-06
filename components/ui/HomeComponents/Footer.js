import Image from "next/image";
import FB from "../../../public/facebook.svg";
import LinkdIn from "../../../public/linkedin.svg";
import Union from "../../../public/union.svg";
import Logo from "../../../public/logo.svg";

export default function Footer() {
  return (
    <>
      <footer style={{ height: 494, backgroundColor: "#121316" }}>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Image src={Logo}></Image>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 basis-3/4">
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 text-base font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      About us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Project
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Safety
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      News
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase">
                  Services
                </h2>
                <ul className="text-gray-500 text-base font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Earthwork
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Special Projects
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Asset Recovery
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Facility Closure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Structure Demolition
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Environmental Remediation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase">
                  Company
                </h2>
                <ul className="text-gray-500 text-base font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Terms and condition
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase">
                  Affiliates
                </h2>
                <ul className="text-gray-500 text-base font-medium">
                  <li className="mb-4">
                    <div
                      href="https://flowbite.com/"
                      className="hover:underline"
                      style={{
                        background:
                          "url(https://s3-alpha-sig.figma.com/img/00ff/c820/1b8d9c72da5f58b9a333ec04cb9aafd0?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTXX7RHrWdlMUhK3IesVuS3DRU7Em-91Wbhq7O63h4rbXzC1rtzWVLx83M5bwRCWU3tGSoyhPSh4hYFwYZc83u9clSI0mCtlfaDELQ8n9unDT5ysXGweu~A-Qj5NVmOn3qB0Q5k0iluKSdffJZen6fkvOd~O1LddrepbAoWB-CcaFOLBvvSE5HbAbabdZnwVeKeF0HsaqciJ~vjBQFEcFPSbu1hrXc~tuDC7SIhCtHqhYhJsy4EfYMvNNDh66pWSPiv5-AVYmd0NJ~teey36yEDjir-RByfOnHGko4Dx2XY0QaX2ee4ZRvsoBc8i2UTQHCqiZfXltmd840iz9Et6aA__) lightgray 50% / cover no-repeat",
                        width: 113,
                        height: 51,
                      }}
                    ></div>
                  </li>
                  <li className="mb-4">
                    <div
                      href="https://flowbite.com/"
                      className="hover:underline"
                      style={{
                        background:
                          "url(https://s3-alpha-sig.figma.com/img/5195/c85f/35c8fb854fd0ee0974a120a9c0c48333?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwaUndGQ0A43WHESBCOkFdeFl7uOT6C6DJD9WajBRRSGfCYoY4YWeqUEGDWe9bQXz0B3dFH1KKX2T6BjoDRxAi-ts~UtRbeNoaQz0RVcoVlWzvWFt57uFgjBh5rb7kLULcKfIl0tAtnLWS-N8G2plCTrqsip2UatttbJ4pj4G8QBdmY5~97q7KIcEXxExWbJfK10owa-XSDWT4iSr4-KyNCqIytkPmdbCawgN~HbZ3PrhzcEQ6anuMPeLKwPnKASf6NYnDqKi429-nFipS~8YdBYk9R1NDRHvG-DXqjSmaLUa5cqt0dn1A9-4wfaQyitN5jbrqlhbKBSV2Yz4LBIeg__)  50% / cover no-repeat",
                        width: 110,
                        height: 55,
                      }}
                    ></div>
                  </li>
                  <li className="mb-4">
                    <div
                      href="https://flowbite.com/"
                      className="hover:underline"
                      style={{
                        background:
                          "url(https://s3-alpha-sig.figma.com/img/e924/5471/ef9287ea879569ac7f39338d8daf9779?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFvuQKYhTlw-V7GGp-WrxHSeRd2b1OfvDdLUb~y9ViEc~dGfV0IXxPpzNKAj6jjx6lC~c5vGoHFV~MJSMofKGVN3u8jzsEVEuV160e-sE-dH0unn45FHTEERh1FrIelg3V40XtbZmK32wxhJNBi~JuZ3mFEHbroKKgKbYbZIiNQHw6FqFqRdMJeMKjxctifm29El6ZSnzWrFtbAlA~6ZOJ807z~vbwz0WmVIpZrywS9wLC-pTSLy~ztidLZP6~KFxz0CrIEBOWSW1cy969WntHOIYsn6ZJszwLBD99KP8lpVA16qjiJ1KFRq4U68dD8~YHoBHpfZCGCTDdgFHHXZsw__) 50% / cover no-repeat",
                        width: 113,
                        height: 57,
                      }}
                    ></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copyright © 2024 AMPCO. All rights reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <div
                className=" flex justify-center align-center border border-gray-600 m-1"
                style={{ height: 27.273, width: 27.273 }}
              >
                <Image src={FB} width={6.69} height={12.35}></Image>
              </div>
              <div
                className=" flex justify-center align-center border border-gray-600 m-1"
                style={{ height: 27.273, width: 27.273 }}
              >
                <Image src={LinkdIn} width={13.379} height={12.35}></Image>
              </div>
              <div
                className=" flex justify-center align-center border border-gray-600 m-1"
                style={{ height: 27.273, width: 27.273 }}
              >
                <Image src={Union} width={11.713} height={12.35}></Image>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
