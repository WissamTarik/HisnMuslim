import { PRAYERS_CONFIG } from "@/constants/prayer";
import { useEffect, useMemo, useState } from "react";

function convertToSeconds(time: string): number {
    if (!time) return 0;

    // يدعم:
    // 2س 8د
    // 2س
    // 8د
    // 2س 8د 30ث

    const hourMatch = time.match(/(\d+)\s*س/);
    const minuteMatch = time.match(/(\d+)\s*د/);
    const secondMatch = time.match(/(\d+)\s*ث/);

    const hours = hourMatch ? Number(hourMatch[1]) : 0;
    const minutes = minuteMatch ? Number(minuteMatch[1]) : 0;
    const seconds = secondMatch ? Number(secondMatch[1]) : 0;

    return hours * 3600 + minutes * 60 + seconds;
}

function formatRemainingTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
        .map((n) => String(n).padStart(2, "0"))
        .join(":");
}

export default function useNextPrayer(
    remainingTime: string,
    prayerName: string
) {
    const [currentTime, setCurrentTime] = useState("");

    const [initialSeconds, setInitialSeconds] = useState(() =>
        convertToSeconds(remainingTime)
    );

    const [secondsLeft, setSecondsLeft] = useState(() =>
        convertToSeconds(remainingTime)
    );

    /**
     * لو وصلت قيمة جديدة من السيرفر
     */
    useEffect(() => {
        const total = convertToSeconds(remainingTime);

        setInitialSeconds(total);
        setSecondsLeft(total);
    }, [remainingTime]);

    /**
     * ساعة حية
     */
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(
                new Date().toLocaleTimeString("ar-EG", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    /**
     * Countdown
     */
    useEffect(() => {
        if (secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsLeft]);

    /**
     * Progress
     */
    const progressValue = useMemo(() => {
        if (initialSeconds <= 0) return 0;

        const elapsedSeconds = initialSeconds - secondsLeft;

        const percentage =
            (elapsedSeconds / initialSeconds) * 100;

        return Number(
            Math.min(100, Math.max(0, percentage)).toFixed(1)
        );
    }, [initialSeconds, secondsLeft]);

    const formattedRemainingTime = useMemo(
        () => formatRemainingTime(secondsLeft),
        [secondsLeft]
    );

    const currentNextPrayerConfig = PRAYERS_CONFIG.find(
        (p) => p.key === prayerName
    );
    console.log({
        remainingTime,
        initialSeconds,
        secondsLeft,
        progressValue,
    });
    return {
        currentNextPrayerConfig,
        progressValue,
        currentTime,
        secondsLeft,
        formattedRemainingTime,
    };
}