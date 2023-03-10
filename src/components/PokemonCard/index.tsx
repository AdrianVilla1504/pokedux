import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from "@ant-design/icons";

function PokemonCard({ name }: any) {
  return (
    <div>
      <Card
        style={{ width: 250 }}
        title={name}
        cover={
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
        }
        extra={<StarOutlined />}
      >
        <Meta description="fire, magic" />
      </Card>
    </div>
  );
}

export default PokemonCard;
