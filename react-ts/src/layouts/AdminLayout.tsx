import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { check } from '../components/check';
import { ToastContainer } from 'react-toastify';
const AdminLayout = () => {
    const user = JSON.parse(localStorage.getItem("acc")!);
    const navigate = useNavigate()
 
  return (
    <div >
      <div className='flex'>
        
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    <a href="#" className="mx-auto">
        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
    </a>

    <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.images} alt="avatar"/>
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/admin/products">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Sản phẩm</span>
            </a>



            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/admin/categories">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Danh mục</span>
            </a>


            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/admin/productColors">
            <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xmlSpace="preserve">
<g><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4631.6,5012.2c-883.3-67.1-1799.2-417.7-2548.4-979.1c-272.1-205-680.2-599.7-894.8-866.1c-561.4-699.4-917.8-1508-1053.9-2395.1c-42.1-270.2-46-990.6-9.6-1255.1c136-952.3,503.9-1803,1082.6-2506.2c1446.7-1755.2,3895.4-2291.7,5928.4-1299.1c480.9,235.7,881.4,517.3,1268.5,892.9c854.6,829.7,1366.2,1898.9,1477.3,3084.9c51.7,561.4-1.9,818.2-214.6,1017.5c-128.4,120.7-239.5,166.7-429.2,176.3c-274,15.3-494.4-76.6-758.8-318.1C8109.3,229.7,7664.7,15,7235.6-32.9c-95.8-11.5-189.7-28.8-208.9-38.3c-51.7-28.8-78.6-122.6-53.6-193.5c30.6-92,111.1-115,300.8-93.9c494.3,55.6,992.5,291.3,1400.7,661.1c218.4,195.4,329.6,249.1,521.2,249.1c162.9,0,218.4-26.8,298.9-143.7c72.8-107.3,86.2-199.3,72.8-477.1c-69-1479.2-818.2-2803.3-2050.2-3625.3c-398.5-266.3-906.3-494.4-1368.1-613.2c-2103.9-544.2-4295.9,459.9-5254,2404.7c-222.3,454.1-358.3,889.1-433.1,1381.5c-42.1,279.8-47.9,927.4-11.5,1188C603.9,1733.8,1061.9,2636.3,1836,3387.4c776,753,1749.4,1201.4,2807.1,1293.4c469.4,42.2,649.6,1.9,747.3-164.8c44.1-74.7,49.8-101.5,42.2-214.6c-9.6-176.3-74.7-302.8-264.4-509.7c-318.1-348.7-526.9-743.5-626.6-1186.1c-19.2-90.1-30.6-228-30.6-406.2c1.9-448.4,86.2-822,274-1209.1C5030.1,486.4,5384.6,135.8,5900-109.5c229.9-109.2,530.8-201.2,601.6-183.9c72.8,19.2,122.6,80.5,122.6,153.3c0,101.6-47.9,139.9-239.5,195.4c-218.4,61.3-557.6,226.1-718.5,348.7c-532.7,404.3-823.9,1036.6-827.8,1795.4c-1.9,500.1,193.5,956.1,595.9,1398.8c260.6,287.4,367.9,563.3,325.7,839.2c-44.1,279.7-235.7,484.8-525,559.5C5129.7,5023.7,4873,5031.4,4631.6,5012.2z"/><path d="M2159.8,2141.9c-318.1-97.7-444.5-494.4-243.3-760.7c92-120.7,235.7-191.6,385.1-191.6c141.8,1.9,226.1,32.6,327.7,120.7c141.8,124.5,197.4,331.5,139.9,523.1c-36.4,120.7-191.6,268.3-320,306.6C2324.6,2176.4,2274.8,2176.4,2159.8,2141.9z M2424.2,1776c92-103.5,19.2-256.8-120.7-256.8c-132.2,0-206.9,139.9-132.2,245.3C2234.5,1856.4,2347.6,1860.3,2424.2,1776z"/><path d="M1793.8,605.2C1688.4,588,1539,478.8,1477.6,373.4c-103.5-170.5-103.5-333.4,0-509.7c155.2-264.4,536.5-308.5,756.9-86.2c95.8,95.8,136.1,197.4,136.1,343s-40.2,247.2-136.1,343C2129.1,570.7,1941.3,630.1,1793.8,605.2z M2002.7,229.7c28.7-26.8,42.2-61.3,42.2-109.2c0-174.4-239.5-220.4-306.6-57.5c-32.6,78.6,3.8,168.6,84.3,203.1C1891.5,294.8,1941.3,285.2,2002.7,229.7z"/><path d="M7275.8-877.9c-218.4-42.1-459.9-231.9-559.5-440.7C6381-2016,7112.9-2746,7808.5-2406.9c314.2,153.3,503.9,517.3,444.5,854.6C8172.5-1086.7,7739.5-787.8,7275.8-877.9z M7685.8-1255.3c281.7-153.3,335.3-540.3,105.4-768.3c-95.8-95.8-197.4-136.1-343-136.1s-249.1,40.3-343,136.1c-270.2,268.3-137.9,730,233.8,823.9C7434.8-1176.8,7582.4-1199.7,7685.8-1255.3z"/><path d="M2217.3-952.6c-105.4-21.1-162.9-49.8-237.6-116.9c-113-99.6-155.2-195.4-155.2-362.1c0-111.1,9.6-160.9,42.2-222.3c49.8-92,157.1-191.6,252.9-233.8c86.2-36.4,256.8-38.3,354.5-5.7c103.5,36.4,220.4,147.5,272.1,260.6C2910.9-1282.1,2592.8-874,2217.3-952.6z M2426.1-1328.1c128.4-162.9-92-356.4-237.6-208.9c-103.5,101.5-28.7,258.7,122.6,258.7C2370.6-1278.3,2395.5-1289.8,2426.1-1328.1z"/><path d="M3271.1-2108c-36.4-11.5-111.1-65.2-166.7-118.8c-195.4-189.7-205-461.8-24.9-668.7c291.3-331.5,848.8-118.8,846.9,323.8c0,136.1-32.6,224.2-120.7,325.7C3681.2-2104.2,3460.8-2048.6,3271.1-2108z M3547-2449c61.3-47.9,69-162.9,17.3-226.1c-92-113-281.7-42.1-281.7,103.5C3282.6-2433.7,3437.8-2362.8,3547-2449z"/><path d="M4794.4-2541c-367.9-166.7-381.3-680.2-26.8-873.7c216.5-116.9,486.7-51.7,624.7,149.5c174.4,258.7,82.4,597.8-195.4,724.3C5093.3-2493.1,4897.9-2493.1,4794.4-2541z M5104.8-2872.5c118.8-128.4,3.8-318.1-161-262.5c-170.5,55.6-128.4,304.7,51.7,304.7C5043.5-2830.4,5078-2843.8,5104.8-2872.5z"/></g></g>
</svg>

                <span className="mx-4 font-medium">Màu sắc</span>
            </a>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/admin/productVersions">
            <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"  version="1.1" id="Layer_1" viewBox="0 0 299.92 299.92" xmlSpace="preserve">
<g>
	<g>
		<g>
			<path d="M293.4,65.2H6.52C2.914,65.2,0,68.114,0,71.72v117.36c0,3.606,2.914,6.52,6.52,6.52h6.52v32.6     c0,3.606,2.914,6.52,6.52,6.52h260.8c3.606,0,6.52-2.914,6.52-6.52v-32.6h6.52c3.606,0,6.52-2.914,6.52-6.52V71.72     C299.92,68.114,297.006,65.2,293.4,65.2z M273.84,221.68h-19.56H228.2h-26.08h-26.08h-26.08h-26.08H97.8H71.72H45.64H26.08V195.6     h19.56h26.08H97.8h26.08h26.08h26.08h26.08h26.08h26.08h19.56V221.68z M286.88,182.56h-6.52H19.56h-6.52V78.24h273.84V182.56z"/>
			<path d="M32.6,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H32.6c-3.606,0-6.52,2.914-6.52,6.52     V163C26.08,166.606,28.994,169.52,32.6,169.52z M39.12,104.32H65.2v52.16H39.12V104.32z"/>
			<path d="M97.8,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H97.8c-3.606,0-6.52,2.914-6.52,6.52     V163C91.28,166.606,94.194,169.52,97.8,169.52z M104.32,104.32h26.08v52.16h-26.08V104.32z"/>
			<path d="M163,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H163c-3.606,0-6.52,2.914-6.52,6.52     V163C156.48,166.606,159.394,169.52,163,169.52z M169.52,104.32h26.08v52.16h-26.08V104.32z"/>
			<path d="M228.2,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H228.2     c-3.606,0-6.52,2.914-6.52,6.52V163C221.68,166.606,224.594,169.52,228.2,169.52z M234.72,104.32h26.08v52.16h-26.08V104.32z"/>
			<path d="M52.16,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C49.246,221.68,52.16,218.766,52.16,215.16z"/>
			<path d="M78.24,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C75.326,221.68,78.24,218.766,78.24,215.16z"/>
			<path d="M104.32,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C101.406,221.68,104.32,218.766,104.32,215.16z"/>
			<path d="M130.4,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C127.486,221.68,130.4,218.766,130.4,215.16z"/>
			<path d="M156.48,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52s-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     S156.48,218.766,156.48,215.16z"/>
			<path d="M182.56,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C179.646,221.68,182.56,218.766,182.56,215.16z"/>
			<path d="M208.64,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C205.726,221.68,208.64,218.766,208.64,215.16z"/>
			<path d="M234.72,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C231.806,221.68,234.72,218.766,234.72,215.16z"/>
			<path d="M260.8,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52     C257.886,221.68,260.8,218.766,260.8,215.16z"/>
		</g>
	</g>
</g>
</svg>

                <span className="mx-4 font-medium">Phiên bản</span>
            </a>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/admin/orders">
            <svg className='' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 425.832 425.833" xml:space="preserve">
<g>
	<path d="M377.763,83.169l-86.238-80.33c-1.957-1.83-4.54-2.839-7.21-2.839H55.291c-5.855,0-10.597,4.742-10.597,10.59v404.647   c0,5.843,4.742,10.595,10.597,10.595H370.54c5.854,0,10.599-4.74,10.599-10.595V90.92   C381.134,87.979,379.915,85.172,377.763,83.169z M108.599,388.26c0-8.273,6.735-15.011,15.018-15.011   c8.282,0,15.012,6.737,15.012,15.011c0,8.284-6.73,15.016-15.012,15.016C115.334,403.276,108.599,396.544,108.599,388.26z    M185.611,388.26c0-8.273,6.736-15.011,15.019-15.011c8.275,0,15.003,6.737,15.003,15.011c0,8.284-6.728,15.016-15.003,15.016   C192.347,403.276,185.611,396.544,185.611,388.26z M360.118,404.654l-135.527-0.131c3.152-4.641,5.007-10.238,5.007-16.258   c0-15.983-12.993-28.974-28.968-28.974c-15.981,0-28.983,12.99-28.983,28.974c0,6.003,1.839,11.574,4.972,16.214l-28.979-0.031   c3.126-4.618,4.952-10.191,4.952-16.183c0-15.983-12.994-28.974-28.975-28.974c-15.98,0-28.98,12.99-28.98,28.974   c0,5.971,1.814,11.519,4.925,16.132l-33.844-0.033l0.252-134.205L87.207,355.1h144.215l69.822-160.598h21.06   c5.79,0,10.476-4.69,10.476-10.473c0-5.782-4.686-10.471-10.476-10.471h-34.79l-69.828,160.589h-114.13l-17.453-69.821h108.77   c5.79,0,10.473-4.691,10.473-10.468c0-5.791-4.684-10.486-10.473-10.486H66.021l0.005-3.951V21.17h197.629v79.471   c0,5.844,4.738,10.585,10.583,10.585h85.88V404.654z"/>
</g>
</svg>

                <span className="mx-4 font-medium">Đơn hàng</span>
            </a>
        </nav>
    </div>
</aside>
        <main>
            <Outlet/>
            <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  limit={3}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
        </main>
      </div>


    </div>
  )
}

export default AdminLayout