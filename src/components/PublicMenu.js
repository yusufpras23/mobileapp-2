"use client"
import { useRouter } from 'next/navigation'

export default function PublicMenu() {
    const router = useRouter()

    const onLoginPage=()=>{
      router.push('/login', { scroll: false })
    }

    return(
        <header className="py-2 bg-black">
          <nav className="w-full">
            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="flex flex-wrap items-center justify-between">
                <div className="text-white text-5xl py-2">
                  <a href="/">ysf.</a>
                </div>
                <div>
                  <ul className="flex flex-row gap-6">
                    <li className="mt-1">
                      <a className="btn-link text-white" href="/about">About</a>
                    </li>
                    <li className="mt-1">
                      <a className="btn-link text-white" href="/work">Work</a>
                    </li>
                    <li className="mt-1">
                      <a className="btn-link text-white" href="/contact">Contact</a>
                    </li>
                    <li>
                      <button  className="btn-primary" onClick={onLoginPage}>
                        <span className="relative text-sm font-semibold text-white">
                          Login
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
    )
}