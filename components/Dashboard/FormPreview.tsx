import { Laptop, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/device-selector.min.css'
import 'react-device-frameset/styles/marvel-devices.min.css'

import { cn } from '@/lib/utils'

type DeviceName = 'iPhone X' | 'MacBook Pro'

const FormPreview: React.FC = () => {
  const [device, setDevice] = useState<DeviceName>('iPhone X')

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-5 flex w-fit items-center gap-1 rounded-md bg-white p-0.5">
        <button
          className={cn(
            'rounded-md p-1.5 transition-all',
            device === 'iPhone X' && 'bg-gray-200'
          )}
          onClick={() => setDevice('iPhone X')}
        >
          <Smartphone />
        </button>
        <button
          className={cn(
            'rounded-md p-1.5 transition-all',
            device === 'MacBook Pro' && 'bg-gray-200'
          )}
          onClick={() => setDevice('MacBook Pro')}
        >
          <Laptop />
        </button>
      </div>

      <DeviceFrameset device={device}>
        <div>Hello world</div>
      </DeviceFrameset>
    </div>
  )
}

export default FormPreview
