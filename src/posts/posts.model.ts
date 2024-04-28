import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
};

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'NestJS', description: 'Post title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Lorem ipsum', description: 'Post content' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;


  @ApiProperty({ example: 'star.png', description: 'Image name' })
  @Column({ type: DataType.STRING })
  image: string;

  // @ApiProperty({ example: 'John Doe', description: 'Post author'})
  // @Column({ type: DataType.STRING})
  // author: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User
};