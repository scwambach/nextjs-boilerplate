"use client";

import Badge from "@/components/Badge";
import {
  CheckCircleIcon,
  StarIcon,
  LightningIcon,
  FireIcon,
  HeartIcon,
  TagIcon,
  TrendUpIcon,
  XIcon,
} from "@phosphor-icons/react";

export default function BadgeExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3>Basic Variants</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="tertiary">Tertiary</Badge>
          <Badge variant="quaternary">Quaternary</Badge>
        </div>
      </div>

      <div>
        <h3>With Left Icon</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" leftIcon={StarIcon}>
            Featured
          </Badge>
          <Badge variant="secondary" leftIcon={CheckCircleIcon}>
            Verified
          </Badge>
          <Badge variant="tertiary" leftIcon={FireIcon}>
            Hot
          </Badge>
          <Badge variant="quaternary" leftIcon={HeartIcon}>
            Favorite
          </Badge>
        </div>
      </div>

      <div>
        <h3>With Right Icon</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" rightIcon={LightningIcon}>
            Fast
          </Badge>
          <Badge variant="secondary" rightIcon={TrendUpIcon}>
            Trending
          </Badge>
          <Badge variant="tertiary" rightIcon={TagIcon}>
            Sale
          </Badge>
          <Badge variant="quaternary" rightIcon={StarIcon}>
            Premium
          </Badge>
        </div>
      </div>

      <div>
        <h3>With Both Icons</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" leftIcon={StarIcon} rightIcon={StarIcon}>
            5 Star
          </Badge>
          <Badge
            variant="secondary"
            leftIcon={CheckCircleIcon}
            rightIcon={XIcon}
          >
            Active
          </Badge>
          <Badge variant="tertiary" leftIcon={FireIcon} rightIcon={TrendUpIcon}>
            Trending
          </Badge>
        </div>
      </div>

      <div>
        <h3>Custom Icon Sizes</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" leftIcon={StarIcon} iconSize={12}>
            Small Icon
          </Badge>
          <Badge variant="secondary" leftIcon={HeartIcon} iconSize={16}>
            Default Icon
          </Badge>
          <Badge variant="tertiary" leftIcon={FireIcon} iconSize={20}>
            Large Icon
          </Badge>
        </div>
      </div>
    </div>
  );
}
