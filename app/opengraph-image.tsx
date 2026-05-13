import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nomt-Nutripharma — Pharmaceutical Distributor in Mongolia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(160deg, #F8FAFC 0%, #F0FDFA 55%, #ECFDF5 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "system-ui, sans-serif",
                    position: "relative",
                }}
            >
                {/* Top accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: "linear-gradient(90deg, #0D9488, #14B8A6)",
                    }}
                />

                {/* Tag */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(13,148,136,0.10)",
                        border: "1px solid rgba(13,148,136,0.25)",
                        borderRadius: 100,
                        padding: "8px 16px",
                        marginBottom: 32,
                    }}
                >
                    <div
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#0D9488",
                        }}
                    />
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#0D9488",
                        }}
                    >
                        Authorized Regional Distributor · Mongolia
                    </span>
                </div>

                {/* Headline */}
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: 800,
                        color: "#0F172A",
                        lineHeight: 1.1,
                        maxWidth: 700,
                        marginBottom: 24,
                        letterSpacing: "-0.02em",
                    }}
                >
                    Your Strategic Gateway to{" "}
                    <span style={{ color: "#0D9488" }}>Regional Healthcare Markets.</span>
                </div>

                {/* Sub */}
                <div
                    style={{
                        fontSize: 20,
                        color: "#64748B",
                        maxWidth: 600,
                        lineHeight: 1.5,
                        marginBottom: 48,
                    }}
                >
                    MFDA registered pharmaceutical distributor. Official partner of
                    Nutricost & Radiant Viewer in Mongolia.
                </div>

                {/* Stats row */}
                <div style={{ display: "flex", gap: 24 }}>
                    {[
                        { value: "10+", label: "Years" },
                        { value: "500+", label: "Partners" },
                        { value: "100%", label: "Compliance" },
                        { value: "24h", label: "Delivery" },
                    ].map((s) => (
                        <div
                            key={s.label}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                background: "white",
                                border: "1px solid #E2E8F0",
                                borderRadius: 16,
                                padding: "16px 24px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            }}
                        >
                            <span
                                style={{ fontSize: 28, fontWeight: 800, color: "#0D9488" }}
                            >
                                {s.value}
                            </span>
                            <span style={{ fontSize: 13, color: "#94A3B8", marginTop: 4 }}>
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Domain */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 48,
                        right: 80,
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#0D9488",
                    }}
                >
                    nomt-nutripharma.com
                </div>
            </div>
        ),
        { ...size }
    );
}
