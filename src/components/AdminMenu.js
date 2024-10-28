"use client"
import { useRouter } from 'next/navigation'

export default function AdminMenu() {
    const router = useRouter()

    const onLogOut=()=>{
        router.push('/', { scroll: false })
    }

    return (
        <header className="py-2 bg-black">
          <nav className="w-full">
            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="flex flex-wrap items-center justify-between">
                <div className="text-white text-5xl py-2" >
                  <a href="/admin">Admin Panel</a>
                </div>
                <div>
                  <ul className="flex flex-row gap-6">
                    <li className="mt-1">
                      <a className="btn-link text-white" href="/admin/work">Work</a>
                    </li>
                    <li className="mt-1">
                      <a className="btn-link text-white" href="/admin/message">Messages</a>
                    </li>
                    <li>
                        <button  className="btn-primary" onClick={onLogOut}>
                            <span className="relative text-sm font-semibold text-white">
                                Log Out
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