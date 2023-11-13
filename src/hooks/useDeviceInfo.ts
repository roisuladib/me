'use client';
import { useEffect, useState } from 'react';

/**
 * Represents device information including user agent and device detection functions.
 */
type DeviceInfo = {
   /** User agent string. */
   info: string;
   /** Checks if the user agent indicates Android. */
   Android: () => RegExpMatchArray | null;
   /** Checks if the user agent indicates BlackBerry. */
   BlackBerry: () => RegExpMatchArray | null;
   /** Checks if the user agent indicates IEMobile (Internet Explorer Mobile). */
   IEMobile: () => RegExpMatchArray | null;
   /** Checks if the user agent indicates iOS (iPhone, iPad, iPod). */
   iOS: () => RegExpMatchArray | null;
   /** Checks if the device is an iPad. */
   iPad: () => boolean | null;
   /** Checks if the user agent indicates Opera Mini. */
   OperaMini: () => RegExpMatchArray | null;
   /** Checks if the user agent indicates any of the known devices. */
   any: () => boolean | null;
};

/**
 * A hook for getting device information and performing device detection based on the user agent.
 *
 * @returns {DeviceInfo} - Device information object with detection functions.
 */
export function useDeviceInfo(): DeviceInfo {
   const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
      info: '',
      Android: () => null,
      BlackBerry: () => null,
      IEMobile: () => null,
      iOS: () => null,
      iPad: () => null,
      OperaMini: () => null,
      any: () => false,
   });

   useEffect(() => {
      if (typeof navigator !== 'undefined') {
         const ua = navigator.userAgent;
         setDeviceInfo((prevDeviceInfo) => ({
            ...prevDeviceInfo,
            info: ua,
            Android: () => ua.match(/Android/i),
            BlackBerry: () => ua.match(/BlackBerry/i),
            IEMobile: () => ua.match(/IEMobile/i),
            iOS: () => ua.match(/iPhone|iPad|iPod/i),
            iPad: () =>
               !!(
                  ua.match(/Mac/) &&
                  navigator.maxTouchPoints &&
                  navigator.maxTouchPoints > 2
               ),
            OperaMini: () => ua.match(/Opera Mini/i),
            any: () =>
               !!(
                  prevDeviceInfo.Android()?.length ||
                  prevDeviceInfo.BlackBerry()?.length ||
                  prevDeviceInfo.iOS()?.length ||
                  prevDeviceInfo.iPad() ||
                  prevDeviceInfo.OperaMini()?.length ||
                  prevDeviceInfo.IEMobile()?.length
               ),
         }));
      }
   }, []);

   return deviceInfo;
}
