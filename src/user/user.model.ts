import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id?: number;

  @Field()
  fullName: string;

  @Field()
  email?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field()
  password?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
