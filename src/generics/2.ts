type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare(top: TopType, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
