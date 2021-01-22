module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageurl: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  Category.associate = (models) => {
    Category.hasMany(models.Product);
  };
  return Category;
};
