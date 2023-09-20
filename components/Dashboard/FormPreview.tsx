import { Laptop, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

import { cn } from '@/lib/utils'

type DeviceName = 'iPhone X' | 'MacBook Pro'

const FormPreview: React.FC = () => {
  const [device, setDevice] = useState<DeviceName>('iPhone X')

  return (
    <div className="relative flex flex-col items-center overflow-y-hidden">
      <div className="z-20 mb-5 flex w-fit items-center gap-1 rounded-md bg-white p-0.5">
        <button
          className={cn(
            'offset_ring rounded-md p-1.5 transition-all',
            device === 'iPhone X' && 'bg-gray-200'
          )}
          onClick={() => setDevice('iPhone X')}
        >
          <Smartphone />
        </button>
        <button
          className={cn(
            'offset_ring rounded-md p-1.5 transition-all',
            device === 'MacBook Pro' && 'bg-gray-200'
          )}
          onClick={() => setDevice('MacBook Pro')}
        >
          <Laptop />
        </button>
      </div>

      <div
        className={cn(
          'z-10 -mt-[130px]',
          device === 'MacBook Pro' && '-mt-[100px]'
        )}
      >
        {/* @ts-ignore */}
        <DeviceFrameset device={device} zoom="70%">
          <div>Hello world</div>
        </DeviceFrameset>
      </div>
    </div>
  )
}

export default FormPreview
