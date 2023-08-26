import { Switch } from '@headlessui/react'

interface ToggleProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
  size?: 'large' | 'medium' | 'small'
  enabledColor?: string
  disabledColor?: string
  className?: string
  top?: string
}
export default function Toggle({
  enabled,
  setEnabled,
  size = 'medium',
  enabledColor = '#2563EB',
  disabledColor = '#E5E7EB',
  className,
  top
}: ToggleProps) {


  let height
  let width
  let ballHeight
  let ballWidth
  let translate
  if (size === 'large') {
    height = 38
    width = 74
    ballHeight = 34
    ballWidth = 34
    translate = 36
  }
  if (size === 'medium') {
    // Scale down by 2/3
    height = 25
    width = 49
    ballHeight = 21
    ballWidth = 21
    translate = 24
  }
  if (size === 'small') {
    // Scale down by 2/3
    height = 20
    width = 40
    ballHeight = 15
    ballWidth = 15
    translate = 20
  }


  return (
    <div className={className}>
      {/* @ts-ignore */}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        css={{
          height: height,
          width: width,
          backgroundColor: enabled ? enabledColor : disabledColor,
        }}
        className={`
          relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          css={{
            height: ballHeight,
            width: ballWidth,
            transform: `translateX(${enabled ? translate : 0}px)`,
            top: top ? top : '0px',
            position: 'relative',
          }}
          className={`
            pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
